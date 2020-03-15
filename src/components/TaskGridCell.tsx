import styled from 'styled-components';
// @ts-ignore: Cannot find module.
import {GridCell} from '@rmwc/grid';
import '@material/layout-grid/dist/mdc.layout-grid.css';

export const TaskGridCell = styled(GridCell)`
    padding: 0.66em;
` as typeof GridCell;