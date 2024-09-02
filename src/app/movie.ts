import { Theatre } from "./theatre";

export class Movie {

    private movieName!: string;

    private description!: string;

    public getMovieName(): string { return this.movieName; }

    public setMovieName(movieName: string) {
        this.movieName = movieName;
    }

    public getDescription(): string { return this.description; }

    public setDescription(description: string) {
        this.description = description;
    }

    public theatreDetails = new class {

        private theatreName!: string;
        private ticketPrice!: number;

        public getTheatreName(): string { return this.theatreName; }

        public setTheatreName(theatreName: string) {
            this.theatreName = theatreName;
        }

        public getTicketPrice(): number { return this.ticketPrice; }

        public setTicketPrice(ticketPrice: number) {
            this.ticketPrice = ticketPrice;
        }

        constructor(public superThis: Movie) {
        }

    }(this);

}
