import type { RangeSliderProps } from './RangeSlider.types';
import RangeSlider from './RangeSlider.vue';

export default {
  title: 'Shared/RangeSlider',
  component: RangeSlider,
  argTypes: {
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    rangeStart: {
      control: 'number',
    },
    rangeEnd: {
      control: 'number',
    },
  },
};

const MOCK_ARGS = {
  min: 10,
  max: 50,
  rangeStart: 10,
  rangeEnd: 50,
  step: 1,
};

const Template = {
  render: (args: RangeSliderProps) => ({
    components: { RangeSlider },
    setup() {
      return {
        args,
      };
    },
    template: `    
                minValue: {{args.rangeStart}}, maxValue: {{args.rangeEnd}}
                <div style="width:300px">
                  <RangeSlider
                  :min="args.min"
                  :max="args.max"
                  :step="args.step"
                  v-model:range-start="args.rangeStart"
                  v-model:range-end="args.rangeEnd" />
               </div>`,
  }),
  args: MOCK_ARGS,
};

export const Default = Template;
