import Skeleton from "react-loading-skeleton";

export const Loading = () => {
    return (
        <>
            <div className="col-md-3 m-5 fs-5">
                LOADING PLESE WAIT...
                <Skeleton height={350} />
            </div>
            <div className="col-md-3">
                <Skeleton height={350} />
            </div>
            <div className="col-md-3">
                <Skeleton height={350} />
            </div>
            <div className="col-md-3">
                <Skeleton height={350} />
            </div>
        </>
    );
};
