import {connect} from 'react-redux'
import ModuleList from '../component/ModuleList'

const stateToPropertyMapper = (state) => ({
    course: state.CourseEditorReducer.course
})

const dispatchToPropertyMapper = (dispatch) => ({
    createModule: (title) => dispatch ({
        type: "CREATE_MODULE",
        title: title
    }),

    deleteModule: (id) => dispatch ({
        type: "DELETE_MODULE",
        id: id
    }),

    editModule: (id, title) => dispatch ({
        type: "EDIT_MODULE",
        id: id,
        title: title,
    }),

    selectModule: (id) => dispatch ({
        type: "SELECT_MODULE",
        selectedModuleId: id
    })
})

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(ModuleList)