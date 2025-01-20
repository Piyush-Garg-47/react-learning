import React , {useState , useEffect} from 'react'
import { Container , PostForm, useForm } from '../components'
import AppwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom';
function EditPost() {
    const [post , setPosts] = useState(null) 
    const {slug } = useParams() 
    const navigate = useNavigate() 
    useEffect(() =>{
        if(slug){
            AppwriteService.getPosts(slug).then((post) =>{
                if(post){
                    setPosts(post)
                }
            })
        }else{
            navigate('/')
        }
    } ,[slug , navigate])
  return post ? (
    <div className='py-8 '>
      <Container>
        <PostForm post ={post} />
      </Container>
    </div>
  ) : null 
}

export default EditPost