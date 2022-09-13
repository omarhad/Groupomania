import React from 'react';
import { useSelector } from 'react-redux';

const UploadInfo = () => {
    // const [file, setFile] = useState();
    // const dispatch = useDispatch();
    const userData = useSelector((state) => state.userReducer);

    const handelInfo = (e) => {
        e.preventDefault();
        // const data = new FormData();
    };


    return (
        <form action='' onSubmit={handelInfo} className='uploadInfo'>
            <h1>
        {userData.firstName} {userData.lastName}
      </h1>
        </form>
    );
};

export default UploadInfo;