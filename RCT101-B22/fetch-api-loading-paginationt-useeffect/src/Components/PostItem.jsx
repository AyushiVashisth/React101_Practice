const PostItem = ({title,key}) => {
    return (
        <ul>
            <li>
                {key}
                {"-->"}
                {title}
            </li>
        </ul>
    );
};

export default PostItem;