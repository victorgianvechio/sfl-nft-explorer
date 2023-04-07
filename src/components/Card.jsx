import { useEffect, useState } from 'react';
import chroma from 'chroma-js';

import { colourOptions } from '../utils/filters';
import Select, { components } from 'react-select';

import { getBackgroundColor, getBuffImg, getNftImg, getResourceImg } from '../utils/getImages'

import { boosters, BASE_URL } from '../utils/collection';

import styles from './Card.module.css';

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

export function Card(props) {

  const [data, setData] = useState(boosters);

  const handleSelectChange = async (selectedOptions) => {

    if (selectedOptions.length === 0) {
      setData(boosters);
      return;
    }

    const filtered = [];
    selectedOptions.map(v => {
      let d = boosters.filter((item) =>
        item.buff.toString().includes(v.value.toString())
      );

      d.map(v2 => {
        filtered.push(v2)
      })      
    });
    
    setData(filtered);
  }

  return (
    <>

      <div className={styles.filterContainer}>
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
      </div>

      <div className={styles.cardContainer}>
        {data.map(item => (
          // Card
          <div key={item.slug} className={getBackgroundColor(item.buff, styles)}>
            <a className="redirect" href={`${BASE_URL}/${item.url}`} target="_blank">

              {/* Header - Type/Icon */}
              <div className={styles.header}>
                <div className={styles.headerDescription}>          
                  <span>{item.buff}</span> 
                </div>
                <div className={styles.headerImg}>
                  <img src={getResourceImg(item.buff)} />    
                </div>
              </div>

              {/* NFT Name */}
              <div className={styles.titleContainer}>
                <span className={styles.title}>{item.name}</span>
              </div>

              {/* NFT Image */}
              <div className={styles.imgContainer}>
                <img src={getNftImg(item.slug)} />        
              </div>
            
              {/* Buffs */}
              <div className={styles.buffsContainer}>
                {item.buffsType.map((buff, index) => (
                  <img key={index} src={getBuffImg(buff.type)} data-toggle="tooltip" data-placement="bottom"
                  title={buff.description}/>
                ))}            
              </div>

            </a>
          </div>
        ))}
      </div>

    </>
  )
}