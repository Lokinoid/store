import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    // height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
    { 
      id: 1,
      img: 'img/shoes_male_2.jpg',
      title: 'Breakfast',
      author: 'jill111',
      featured: true,
    },
    {
      id: 2,
      img: 'img/shoes_male_2.jpg',
      title: 'Tasty burger',
      author: 'pashminu',
    },
    {
      id: 3,
      img: 'img/shoes_male_2.jpg',
      title: 'Camera',
      author: 'Danson67',
    },
    {
      id: 4,
      img: 'img/shoes_male_2.jpg',
      title: 'Morning',
      author: 'fancycrave1',
      featured: true,
    },
    {
      id: 5,
      img: 'img/shoes_male_2.jpg',
      title: 'Hats',
      author: 'Hans',
    },
    {
      id: 6,
      img: 'img/shoes_male_2.jpg',
      title: 'Honey',
      author: 'fancycravel',
    },
    {
      id: 7,
      img: 'img/shoes_male_2.jpg',
      title: 'Vegetables',
      author: 'jill111',
    },
    {
      id: 8,
      img: 'img/shoes_male_2.jpg',
      title: 'Water plant',
      author: 'BkrmadtyaKarki',
    },
];


class GridItem extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
          <GridTile
              key={props.id}
              title={props.title}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              actionPosition="left"
              titlePosition="top"
              titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              cols={props.featured ? 2 : 1}
              rows={props.featured ? 2 : 1}
            >
            <img src={props.img} />
          </GridTile>
        );
    }
}

class Grid extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.gridItems = tilesData.map(tile => {
          return (
            <GridTile
              key={tile.id}
              title={tile.title}
              subtitle={<span>by <b>{tile.author}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            >
              <img src={tile.img} />
            </GridTile>
          );
        });
    }

    render() {
        return (
            <div style={styles.root}>
                <GridList
                  cols={2}
                  cellHeight={200}
                  padding={1}
                  style={styles.gridList}
                >
                {this.gridItems}
                </GridList>
            </div>
        );
    }
}

export default Grid;