import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const DragItem = dynamic(() => import('@/components/DragItem'), { ssr: false });
const DropArea = dynamic(() => import('@/components/DropArea'), { ssr: false });

const DnDPage: NextPage = () => {
  return (
    <div className="flex gap-[16px] p-[16px]">
      <div className="border p-[16px]">
        <DropArea>
          <DragItem>Item 1</DragItem>
          <DragItem>Item 2</DragItem>
          <DragItem>Item 3</DragItem>
          <DragItem>Item 4</DragItem>
        </DropArea>
      </div>
      <div className="border p-[16px]">
        <DropArea>
          <DragItem>Item 5</DragItem>
          <DragItem>Item 6</DragItem>
          <DragItem>Item 7</DragItem>
        </DropArea>
      </div>
    </div>
  );
};

export default DnDPage;
