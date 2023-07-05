import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const DragItem = dynamic(() => import('@/components/DragItem'), { ssr: false });
const DropArea = dynamic(() => import('@/components/DropArea'), { ssr: false });

const DnDPage: NextPage = () => {
  const cardClassNames = 'flex items-center w-[240px] h-[48px] px-[16px] py-[8px] rounded-md shadow-md';

  return (
    <div className="flex gap-[16px] p-[16px]">
      <div className="flex-1 border p-[16px]">
        <p className="text-center mb-[16px]">Box A</p>
        <DropArea>
          <DragItem className={cardClassNames}>Item 1</DragItem>
          <DragItem className={cardClassNames}>Item 2</DragItem>
          <DragItem className={cardClassNames}>Item 3</DragItem>
          <DragItem className={cardClassNames}>Item 4</DragItem>
        </DropArea>
      </div>
      <div className="flex-1 border p-[16px]">
      <p className="text-center mb-[16px]">Box B</p>
        <DropArea>
          <DragItem className={cardClassNames}>Item 5</DragItem>
          <DragItem className={cardClassNames}>Item 6</DragItem>
          <DragItem className={cardClassNames}>Item 7</DragItem>
        </DropArea>
      </div>
    </div>
  );
};

export default DnDPage;
