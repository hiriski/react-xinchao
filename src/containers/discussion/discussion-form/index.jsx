import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import SendIcon from '@material-ui/icons/Send';
import { Editor, EditorState } from 'draft-js';

const threadSchema = yup.object().shape({
  // body: yup.string().required('Field is required'),
});

const DiscussionForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty(),
  );
  const editor = React.useRef(null);

  function focusEditor() {
    editor.current.focus();
  }

  console.log(editor);

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(threadSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        style={{ border: '1px solid black', minHeight: '6em', cursor: 'text' }}
        onClick={focusEditor}
      >
        <Editor
          ref={editor}
          editorState={editorState}
          onChange={setEditorState}
          placeholder="Write something!"
        />
      </div>
      <Button
        fullWidth
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        startIcon={<SendIcon />}
      >
        Post
      </Button>
    </form>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

DiscussionForm.propTypes = {};

export default DiscussionForm;
