import React, {Fragment, Component } from 'react'
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export class User extends Component {

  componentDidMount(){
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }  

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
  }
    
  render() {
    const {name, avatar_url, location, bio, blog, login, html_url, followers,company, following, public_repos, public_gists, hireable} =  this.props.user;

    const {loading,repos} = this.props;

    if(loading) return <Spinner />
    return <Fragment>
        <Link to ='/' className='btn btn-light'>
        Back To Search
        </Link>
        Hireable: {''}
        {hireable ? <i className='fas fa-check text-success' /> : <i className='fas fa-times-circle text-danger' />}
        <div className='card grid-2'>
            <div className='all-center'>
                <img src={avatar_url} className='round-img' style={{width: '150px'}} alt=''/>
                <h1>{name}</h1>
                <p>Location: {location}</p>
            </div>
            <div>
               {bio && (<Fragment>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                </Fragment>)} 
                <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
                <ul>
                    <li>
                        {login && <Fragment>
                          <strong>Username: </strong>  {login}
                        </Fragment>}

                        {company && <Fragment>
                          <strong>Company: </strong>  {company}
                        </Fragment>}

                        {blog && <Fragment>
                          <strong>WebSite: </strong>  {blog}
                        </Fragment>}

                    </li>
                </ul>
            </div>
        </div>
        <div className='card text-center'>
            <div className='bagde badge-primary'> Followers: {followers}</div>
            <div className='bagde badge-success'> Following: {following}</div>
            <div className='bagde badge-ligth'> Public Repos: {public_repos}</div>
            <div className='bagde badge-dark'> Public Gists: {public_gists}</div>
        </div>

        <Repos repos={repos} />
    </Fragment>
  }
}

export default User
