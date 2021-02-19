import React,{useRef,useState} from 'react'
import {Card,Button,Form,Alert,Container} from 'react-bootstrap'
import { Link,useHistory } from 'react-router-dom';
import {useAuth} from '../contexts/Authcontexts'



function Signup() {
    
    const emailRef=useRef()
    const passwordRef=useRef();
    const conpasswordRef=useRef()
    const {signup} = useAuth();
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(false)
    const history=useHistory()

    async function handleSubmit(e){
        e.preventDefault();
        if(passwordRef.current.value!==conpasswordRef.current.value){
            return setError("Password does not Match")
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value,passwordRef.current.value)  
            history.push('/')      
        } catch (error) {
            return setError("Failed to create account")
        }
        setLoading(false)
    }
    
    return (
     <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
     <div className="w-100" style={{maxWidth:'400px'}}>
    <Card>
      <Card.Body>
          <h2 className="mb-4 text-center">Sign Up</h2>
          <Form onSubmit={handleSubmit}>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" required ref={emailRef} />
              </Form.Group>
              <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" required ref={passwordRef} />
              </Form.Group>
              <Form.Group id="password-confirm">
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control type="password" required ref={conpasswordRef} />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit"> Sign Up</Button>
          </Form>
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
     Already have an account ? <Link to="/login">Log In</Link>
    </div>
    </div>
    </Container>
    )
}

export default Signup
