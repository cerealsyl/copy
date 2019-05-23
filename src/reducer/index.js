import { combineReducers } from "redux";
import CourseManagerNavBarReducer from "./CourseManagerNavBarReducer";
import WhiteBoardReducer from "./WhiteBoardReducer";
import CourseTableReducer from "./CourseTableReducer"
import CourseEditorReducer from './CourseEditorReducer'



const combined = combineReducers({
    CourseManagerNavBarReducer,
    WhiteBoardReducer,
    CourseEditorReducer,

});

export default combined;



