import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import { Car } from "../shared/car";
import { Carservice } from "../shared/car.serivice";

export class Home extends React.Component<any> {
    constructor(props: any) {
        super(props);

        this.state = {
            cars: []
        }
    }

    async componentDidMount() {
        const carService = new Carservice();
        const response = await carService.list({ skip: 0, offset: 2 });
        this.setState({ cars: response })
    }

    handleImageClick(id: number, imageUrl: string): void {
        const imageName = imageUrl.split('/').pop();
        this.props.history.push(`/viewer/${id}/${imageName}`);
    }

    render() {
        const { cars } = this.state as { cars: Car[] };
        return (
            <>
                <Navbar title="Car photos" color="navbar-dark bg-primary"></Navbar>
                <div className="container mt-5 p-4 mt-md-5 pt-md-5">
                    {cars.map(car => {
                        return (
                            <div key={car.id} className="row">
                                <BrowserRouter>
                                    {
                                        car.images.map(image => {
                                            return (
                                                <div key={image.set} className="col-xs-12 col-md-4 col-lg-4 col-xl-3 mb-3" onClick={() => this.handleImageClick(car.id, image.uri)}>
                                                    <img src={`${image.uri}_2.jpg`} className="img-fluid w-100 " alt="car" />
                                                </div>
                                            )
                                        })
                                    }
                                </BrowserRouter>

                                <div className="col-12 fw-bold mb-5 mx-3">
                                    {car.title}
                                </div>
                            </div>
                        );
                    })}

                </div>
            </>
        );
    }
}