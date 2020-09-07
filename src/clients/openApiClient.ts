import axios from 'axios'

export default {
    loadOpenApiConfiguration: (dispatch: Function, success: Function) => {
        axios.get('https://localhost:44349/back/openapi.json')
            .then(result => {
                dispatch(success(result.data))
            })
            .catch(error => {
                console.error(error)
            })
    }
}

  