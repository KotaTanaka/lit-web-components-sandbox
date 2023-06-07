import { Slots } from './Slots';

export const SlotsSample = () => {
  return (
    <Slots>
      <p slot="head">This element will be projected onto the "head" slot.</p>
      <p slot="tail">This element will be projected onto the "tail" slot.</p>
      <div slot="tail">
        <Foo />
      </div>
      <p>
        Elements without a slot attribute will be projected onto the default
        slot.
      </p>
    </Slots>
  );
}

const Foo = () => {
  return (
    <>
      React Components must be a descendant of an element
      with a slot attribute otherwise they will be projected
      onto the default slot.
    </>
  );
}
