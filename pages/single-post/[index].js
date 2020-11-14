import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '../AppBar';
import request from '../../api/request';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: '30px 200px',
  },
  btn: {
    marginTop: 15,
    width: '100%'
  }
}));


export async function getServerSideProps({ query }) {
  
  const response = await request(`/posts/${query.id}`);
  const post = response.payload;
  const userId = post.userId;
  const userResponse = await request(`/users/${userId}`)
  const user = userResponse.payload
  

  // Pass data to the page via props
  return { props: { post, user } }
}
export default function PaperSheet({ post, user }) {
  const classes = useStyles();
  const router = useRouter()

  return (
    <div>
      <AppBar />
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {post.title}
        </Typography>
        <Typography component="p">
          {post.body}
        </Typography>
        <Typography variant="h6" align="right">
          {`By ${user.name}`}
        </Typography>
        <Button className={classes.btn} color="primary">
            <Link href="/post-list">
              <a>Back To List</a>
            </Link>
        </Button>
      </Paper>
    </div>
  );
}

