import {useEffect, useState} from 'react';
import useBombFinance from './useBombFinance';
import useRefresh from './useRefresh';

const useFetchBombAPR = () => {
    const [apr, setApr] = useState<number>(0);
    const bombFinance = useBombFinance();
    const {slowRefresh} = useRefresh();

    useEffect(() => {
        async function fetchBoardroomAPR() {
            try {
                setApr(await bombFinance.getBombStakeAPR());
            } catch (err) {
                console.error(err);
            }
        }

        fetchBoardroomAPR();
    }, [setApr, bombFinance, slowRefresh]);

    return apr;
};

export default useFetchBombAPR;
