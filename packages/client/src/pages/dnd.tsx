import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const DraggableArea = dynamic(() => import('@/components/DraggableArea'), { ssr: false });
const DraggableItem = dynamic(() => import('@/components/DraggableItem'), { ssr: false });

const DnDPage: NextPage = () => {
  return (
    <div className="flex gap-[16px] p-[16px]">
      <div className="border p-[16px]">
        <DraggableArea>
          <DraggableItem>Item 1</DraggableItem>
          <DraggableItem>Item 2</DraggableItem>
          <DraggableItem>Item 3</DraggableItem>
          <DraggableItem>Item 4</DraggableItem>
        </DraggableArea>
      </div>
      <div className="border p-[16px]">
        <DraggableArea>
          <DraggableItem>Item 5</DraggableItem>
          <DraggableItem>Item 6</DraggableItem>
          <DraggableItem>Item 7</DraggableItem>
        </DraggableArea>
      </div>
    </div>
  );
};

export default DnDPage;
