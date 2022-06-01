import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuote, selectQuote, selectQuoteStatus } from './quoteSlice';

export const Quote = () => {
    const quote = useSelector(selectQuote);
    const quoteStatus = useSelector(selectQuoteStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchQuote());
    }, [dispatch]);

    return (
        <>
            {quoteStatus.hasError && (
                <p>There was a problem fetching the Quote</p>
            )}
            {quoteStatus.isLoading && <p>Loading Quote...</p>}
            <div>
                <p>{quote.message}</p>
                <p>{quote.author}</p>
            </div>
        </>
    );
};
