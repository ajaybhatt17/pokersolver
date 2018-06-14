

declare class pokersolver {

    static Hand: pokersolver.__Hand;

}

declare namespace pokersolver {

    interface __Hand {
        solve: (e: string[]) => any;
    }

}

export = pokersolver;
export as namespace pokersolver;
