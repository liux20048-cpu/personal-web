import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { useEffect } from 'react';

export const AuroraBackground = () => {
  // 鼠标位置状态
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 平滑的鼠标位置 (用于位移)
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // 鼠标移动速度 (用于呼吸效果)
  const velocityX = useMotionValue(0);
  const velocityY = useMotionValue(0);
  // 简单的速度计算：当前值 - 上一帧值 (通过 useEffect 模拟)
  // 或者使用 useVelocity hook (Framer Motion 提供的)
  // 但为了简单控制呼吸感，我们可以直接基于 smoothMouse 和 mouse 的差值来估算“活跃度”

  // 呼吸效果：基于鼠标移动活跃度调整亮度和饱和度
  // 当鼠标快速移动时，差值变大，output 也变大
  const mouseActivity = useTransform(
    [smoothMouseX, smoothMouseY], 
    ([x, y]: number[]) => {
      const dx = Math.abs(x - mouseX.get());
      const dy = Math.abs(y - mouseY.get());
      return Math.min((dx + dy) / 5, 1); // 归一化到 0-1
    }
  );

  const brightness = useTransform(mouseActivity, [0, 1], [1.1, 1.4]); // 提高基础亮度
  const saturate = useTransform(mouseActivity, [0, 1], [1.1, 1.3]);   // 提高基础饱和度
  const filter = useMotionTemplate`blur(80px) brightness(${brightness}) saturate(${saturate})`; // 减小模糊半径，让轮廓更清晰

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // 归一化鼠标位置 (-1 到 1)，以屏幕中心为原点
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // 不同层的视差系数 - 增加移动范围
  const x1 = useTransform(smoothMouseX, [-1, 1], [-100, 100]);
  const y1 = useTransform(smoothMouseY, [-1, 1], [-100, 100]);

  const x2 = useTransform(smoothMouseX, [-1, 1], [50, -50]);
  const y2 = useTransform(smoothMouseY, [-1, 1], [50, -50]);

  const x3 = useTransform(smoothMouseX, [-1, 1], [-40, 40]);
  const y3 = useTransform(smoothMouseY, [-1, 1], [40, -40]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-background transition-colors duration-300">
      {/* 基础背景色 */}
      <div className="absolute inset-0 bg-background transition-colors duration-300" />

      {/* 动态光晕层 1 - 荧光绿 (跟随 Primary 颜色) */}
      <motion.div
        style={{ x: x1, y: y1 }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-60 dark:opacity-40"
      >
        <motion.div
          className="w-full h-full bg-primary/60 dark:bg-primary/40 rounded-full"
          style={{ filter }}
          animate={{
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 90, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* 动态光晕层 2 - 深蓝 */}
      <motion.div
        style={{ x: x2, y: y2 }}
        className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-60 dark:opacity-40"
      >
        <motion.div 
          className="w-full h-full bg-blue-400/50 dark:bg-blue-600/30 rounded-full"
          style={{ filter }}
          animate={{
            scale: [1, 0.8, 1.1, 1],
            rotate: [0, -60, 60, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        />
      </motion.div>

      {/* 动态光晕层 3 - 紫色 */}
      <motion.div
        style={{ x: x3, y: y3 }}
        className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-60 dark:opacity-40"
      >
        <motion.div 
          className="w-full h-full bg-purple-400/50 dark:bg-purple-600/30 rounded-full"
          style={{ filter }}
          animate={{
            scale: [1, 1.1, 0.9, 1],
            rotate: [0, 45, -45, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
        />
      </motion.div>
      
      {/* 动态光晕层 4 - 青色 (新增，增强丰富度) */}
      <motion.div
        style={{ x: x2, y: y1 }} // 混合视差
        className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-60 dark:opacity-40"
      >
        <motion.div 
          className="w-full h-full bg-cyan-400/50 dark:bg-cyan-500/30 rounded-full"
          style={{ filter }}
          animate={{
            scale: [1, 1.3, 0.8, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

       {/* 叠加一个噪点纹理增加质感 */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent,rgba(0,0,0,0.05))] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(10,10,10,0),rgba(10,10,10,0.8))]" />
    </div>
  );
};
