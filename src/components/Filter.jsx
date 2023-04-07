import styles from './Filter.module.css';
import { getResourceImg } from '../utils/getImages'

import chroma from 'chroma-js';

import { colourOptions } from '../utils/filters';
import Select, { components } from 'react-select';

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles, 
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
};

const { Option } = components;
const IconOption = props => (
  <Option {...props}>
    <img
      src={getResourceImg(props.data.value)}
      style={{ width: 20 }}
      alt={props.data.label}
    />
    {props.data.label}
  </Option>
);

// export default () => (
//   <Select
//     closeMenuOnSelect={false}
//     defaultValue={[colourOptions[0], colourOptions[1]]}
//     isMulti
//     options={colourOptions}
//     styles={colourStyles}
//   />
// );

export function Filter() {
  return(
    <Select
      className={styles.select}
      closeMenuOnSelect={false}
      // defaultValue={[
      //   colourOptions[0], 
      //   colourOptions[1],
      //   colourOptions[2],
      //   colourOptions[3],
      //   colourOptions[4],
      //   colourOptions[5],
      //   colourOptions[6],
      //   colourOptions[7],
      //   colourOptions[8],
      //   colourOptions[9],
      //   colourOptions[10],
      //   colourOptions[11],
      //   colourOptions[12],
      //   colourOptions[13],
      //   colourOptions[14],
      //   colourOptions[15],
      //   colourOptions[16],
      //   colourOptions[17],
      // ]}
      isMulti
      options={colourOptions}
      styles={colourStyles}
      components={{ Option: IconOption }}
      placeholder="Select resources to filter..."
    />
  )
}
