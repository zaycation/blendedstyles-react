import React, { Component } from "react";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselItems: [
        {
          id: 0,
          name: "Exceptional Hospitality",
          image: "assets/images/caro1.jpg",
          carouselOrder: 1,
          description:
            "We treat our customers like the queens and kings they are! No disrespect is tolerated within our shop.",
        },
        {
          id: 1,
          name: "Artistry & Tradition",
          image: "assets/images/caro3.jpg",
          carouselOrder: 2,
          description:
            "Our master barbers have been practicing their craft for decades. Checkout the gallery for additional high quality photos of our cuts.",
        },
        {
          id: 2,
          name: "Customer is King",
          image: "assets/images/caro4.jpg",
          carouselOrder: 3,
          description:
            "No customer request is too much at Blended Styles. We go above and beyond to ensure customer satisfaction for every individual.",
        },
      ],
    };
  }

  render() {
    const directory = this.state.carouselItems.map(carouselItem => {
        return (
            <div key={carouselItem.id} className="col">
          <img src={carouselItem.image} alt={carouselItem.name} />
          <h2>{carouselItem.name}</h2>
          <p>{carouselItem.description}</p>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{directory}</div>
      </div>
    );
  }
}

export default Directory;
