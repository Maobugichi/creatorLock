import { motion } from 'motion/react';
import { Card } from "../components/card";
import { Header } from "../components/header";
import { Paragraph } from "../components/paragraph";

export const CardSpread = () => {
  const cardInfo = [
    {
      header: 'Your First Step Is Your Realest One',
      desc: 'Upload your first digital product, be it an ebook, preset, beat, video, or design. With CreatorLock, locking content and testing the waters is simple no website needed.',
      tags: ['#NoCode', '#DigitalUpload', '#MonetizeNow', '#SecureContent'],
      tagColor:'bg-[#EFCDAC]',
      className: 'translate-y-10 -translate-x-5 lg:translate-x-15 rotate-[-5deg] w-[350px]',
      inner: 'bg-[#FFE1CB]'
    },
    {
      header: 'Feedback Is Fuel, Not Failure',
      desc: 'Track views, purchases, and engagement in real time to see what resonates. Learn fast, improve faster. CreatorLock’s dashboard gives you clear insights—no fluff, just what you need to grow.',
      tags: ['#CreatorAnalytics', '#RealTimeStats',  '#DataDriven', '#GrowYourAudience'],
      tagColor:'bg-[#C0EAFE]',
      className: '-translate-x-5 translate-y-8 lg:-translate-y-2 lg:-translate-x-0 w-[350px]',
      inner: 'bg-[#E0F3FF]'
    },
    {
      header: 'When Creators Grow, Everyone Wins',
      desc:'Grow your reach, build loyal fans, and lock in support with tools that connect and protect. From exclusive drops to license keys, it’s all made for creators.',
      tags: ['#CollabReady', '#CreatorGrowth', '#ExclusiveDrops', '#FanSupport'],
      tagColor:'bg-[#D6C8FF]',
      className: 'translate-y-5 lg:translate-y-10 -translate-x-5 lg:-translate-x-15 rotate-[5deg] w-[350px]',
      inner: 'bg-[#E2DBF9]'
    }
  ];

  return (
    <div className="w-[85%] mx-auto flex lg:flex-row flex-col gap-4">
      {cardInfo.map((info, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.1, type: 'spring', stiffness: 300, damping: 25 }}
        >
          <Card
            className={`cursor-pointer ${info.className} bg-white p-3 hover:-translate-y-36 hover:relative hover:z-5 transition-transform duration-700 h-[300px] w-[35%] rounded-xl shadow-2xl shadow-blue-900/30`}
          >
            <div className={`rounded-xl flex flex-col justify-between h-[90%] p-4 ${info.inner}`}>
              <Header level={4} className="text-lg font-bold ">
                {info.header}
              </Header>
              <Paragraph content={info.desc} className="text-sm text-[#343733] tracking-wide " />
              <div className='flex h-14  flex-wrap gap-2'>
                {
                  info.tags?.map((tag:any) => (<p className={ `${info.tagColor} font-poppins text-xs w-fit p-2 h-7 rounded-2xl grid place-content-center`}>{tag}</p>))
                }
              </div> 
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};