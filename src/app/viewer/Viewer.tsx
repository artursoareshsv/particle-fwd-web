import React from "react";
import { Navbar } from "../navbar/Navbar";
import { Car } from "../shared/car";
import { Carservice } from "../shared/car.serivice";

class Viewer extends React.Component<any> {
    constructor(props: any) {
        super(props);

        this.state = {
            car: null
        }
    }

    async componentDidMount() {
        const params = this.props.match?.params;

        if (params) {
            const carService = new Carservice();
            const response = await carService.findById(params).catch(console.log);
            this.setState({ car: response })
        }
    }

    navigateBack(): void {
        this.props.history.goBack();
    }

    render() {
        const { car } = this.state as { car: Car };
        return (
            <>
                <Navbar title={car?.title} color="navbar-dark bg-dark" close={() => this.navigateBack()}></Navbar>
                <div className="bg-dark h-100 d-flex justify-content-center align-items-center">
                    <img src={`${car?.imageUrl}_27.jpg`} className="img-fluid" alt="car" />
                </div>
            </>
        );
    }
}

export default Viewer;