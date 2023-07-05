import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const DragItem = dynamic(() => import('@/components/DragItem'), { ssr: false });
const DropArea = dynamic(() => import('@/components/DropArea'), { ssr: false });

const DnDPage: NextPage = () => {
  const cardClasses = 'flex items-center w-[240px] h-[48px] px-[16px] rounded-md shadow-lg bg-[aliceblue] [&:not(:last-of-type)]:mb-[8px]';
  const largeCardClasses = 'flex items-center w-[320px] h-[80px] px-[16px] shadow-md bg-[lightyellow] [&:not(:last-of-type)]:mb-[8px]'

  return (
    <div className="flex gap-[16px] p-[16px]">
      <div className="flex-1 border p-[16px]">
        <p className="text-center mb-[16px]">Box A</p>
        <DropArea>
          <DragItem className={largeCardClasses}>Item 1</DragItem>
          <DragItem className={largeCardClasses}>Item 2</DragItem>
          <DragItem className={largeCardClasses}>Item 3</DragItem>
          <DragItem className={largeCardClasses}>Item 4</DragItem>
        </DropArea>
      </div>
      <div className="flex-1 border p-[16px]">
      <p className="text-center mb-[16px]">Box B</p>
        <DropArea>
          <DragItem className={cardClasses}>Item 5</DragItem>
          <DragItem className={cardClasses}>Item 6</DragItem>
          <DragItem className={cardClasses}>Item 7</DragItem>
        </DropArea>
      </div>
    </div>
  );
};

export default DnDPage;
