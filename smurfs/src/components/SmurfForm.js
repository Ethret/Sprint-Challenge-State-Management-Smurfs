import React from 'react';
import { Form, Field, withFormik } from 'formik';
import { postData } from '../actions'
import { connect } from 'react-redux'

const FormCreator = ( props ) => {
  return(
          <Form>
              <h2>Add Your Smurf</h2>
              <Field type = 'text' placeholder = 'Enter Name' name = 'name' className = 'input-field' data-testid = 'field'/>
              <Field type = 'age' placeholder = 'Enter Age' name = 'age' className = 'input-field' data-testid = 'field'/>
              <Field type = 'height' placeholder = 'Enter Height' name = 'height' className = 'input-field' data-testid = 'field'/>
              <button type = 'submit'>Add This Smurf</button>
          </Form>
  )
}

const SmurfForm = withFormik({
  mapPropsToValues({ name, age, height }){
      return {
      name : name || '',
      age : age || '',
      height : height || ''}
  },

  handleSubmit(values, props){

      const dataToPost = {
          name: values.name,
          age: values.age,
          height: values.height,
          id: Date.now()
      }
      props.props.postData(dataToPost)
      values.name = ''
      values.age = ''
      values.height = ''
  }
})

(FormCreator)

const mapStateToProps = state => {
  return {
      state
  }
}

export default connect(mapStateToProps, { postData })(SmurfForm)
