import { useState } from 'react'

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

export function Filter(props) {

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [data, setData] = useState(props.boosters);

  const handleSelectChange = (selectedOptions) => {
    // console.log(selectedOptions)
    console.log(selectedOptions)
    setSelectedOptions(selectedOptions);
    data.filter((item) => {
      selectedOptions.every(
        (option) => {
          // item[option.value].toString() === option.value
        }
      )
    });
  };

  // const filteredData = data.filter((item) =>
  //   item.FarmID.toString().includes(filterText.toString())
  // );

  // const filterOptions = (options, filter) => {
  //   return options.filter(
  //     (option) =>
  //       option.label.toLowerCase().indexOf(filter.toLowerCase()) >= 0
  //   );
  // };

  // const customFilterOption = (option, searchText) => {
  //   const keywords = searchText.toLowerCase().split(' ');
  //   const values = Object.values(option.data);
  //   return keywords.every((keyword) =>
  //     values.some((value) => value.toLowerCase().includes(keyword))
  //   );
  // };

  // const filteredData = data.filter((item) =>
  //   selectedOptions.every(
  //     (option) => item[option.name].toString() === option.value
  //   )
  // );

  return(
    <Select
      className={styles.select}
      closeMenuOnSelect={false}
      // defaultValue={[
      //   colourOptions[0], 
      //   colourOptions[1],
      // ]}
      isMulti
      options={colourOptions}
      styles={colourStyles}
      components={{ Option: IconOption }}
      onChange={handleSelectChange}
      placeholder="Select resources to filter..."
    />
  )
}
