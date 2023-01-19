
import * as React from 'react';
import Book from '../../components/Book';
import { Grid } from '@mui/material';

const BookList = ({books}) => {
  return (
    <Grid container>
        {books.map((book,i)=> 
        (<Book book={book} id={i}/>))}
    </Grid>
  );
}

  export default BookList;