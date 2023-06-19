import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Paper } from '@mui/material';

export default function ItemTarefa({ tarefa, removeTarefa }) {

    return (
        <Paper style={{ padding: '0.5em', marginBottom: '0.5em'}}>
            <ListItem
                secondaryAction={
                    <IconButton edge="end">
                        <DeleteIcon onClick={() => removeTarefa(tarefa.id)}/>
                    </IconButton>
                }
                disablePadding
                fullWidth
                >
                <ListItemButton role={undefined} dense>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            tabIndex={-1}
                            disableRipple
                            />
                    </ListItemIcon>
                    <ListItemText primary={tarefa.tarefa} />
                </ListItemButton>
            </ListItem>
        </Paper>
    );
}