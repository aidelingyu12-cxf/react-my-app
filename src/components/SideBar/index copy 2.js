import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Link from '@mui/material/Link';

import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {
  Link as RouterLink,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
} from 'react-router';
import "./index.css"
import menuList from "./menuList"

const breadcrumbNameMap = menuList.reduce((acc, item) => {
  acc[item.index] = item.title;
  if (item.subs != null) {
    const sub = item.subs
    const inneracc = sub.reduce((acc, subitem) => {
      acc[subitem.index] = subitem.title;
      return acc;
    }, {});
    Object.assign(acc, inneracc);
  };

  return acc;
}, {});


// const breadcrumbNameMap = {
//   '/inbox': 'Inbox',
//   '/inbox/important': 'Important',
//   '/trash': 'Trash',
//   '/spam': 'Spam',
//   '/drafts': 'Drafts',
//   '/spam111': 'spam111',
//   '/trashdd': 'trashdd'

// };

function ListItemLink(props) {
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  let icon = null;
  if (open != null) {
    icon = open ? <ExpandLess /> : <ExpandMore />;
  }

  return (
    <li>
      <ListItemButton component={RouterLink} to={to} {...other} sx={{ '&:hover': { backgroundColor: "rgb(162, 209, 236)" } }}>
        <ListItemText primary={primary} />
        {icon}
      </ListItemButton>
    </li>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

function LinkRouter(props) {
  return <Link {...props} component={RouterLink} />;
}

function Page() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <LinkRouter underline="hover" color="inherit" to="/">
        Home
      </LinkRouter>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <Typography key={to} sx={{ color: 'text.primary' }}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}

export default function RouterBreadcrumbs() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (

    <Box className="sidebar-component" initialEntries={['/inbox']} initialIndex={0}>
      <div className='side-bar-logo'>
        sss
      </div>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: 360 }}>
        <Routes>
          <Route path="*" element={<Page />} />
        </Routes>
        <Box
          sx={{ bgcolor: 'background.paper', mt: 1 }}
          component="nav"
          aria-label="mailbox folders"
        >
          {

            menuList.map(item => {
              if (item.subs) {
                return (
                  item.subs.map(item => {
                    if (item.subs) {
                      <List>
                        <ListItemLink key={item.index} to={item.index} />

                        <Collapse component="li" in={open} timeout="auto" unmountOnExit>
                          {
                            item.subs.map(item => {
                              <List disablePadding>
                                <ListItemLink sx={{ pl: 4 }} key={item.index} to={item.index} />
                              </List>

                            })
                          }
                          <ListItemLink sx={{ pl: 4 }} key={item.index} to={item.index} />
                        </Collapse>
                      </List>
                    } else {
                      return (
                        <List>
                          <ListItemLink key={item.index} to={item.index} />
                        </List>
                      )
                    }
                  })

                )
              } else {
                return (
                  <List>
                    <ListItemLink key={item.index} to={item.index} />
                  </List>

                );
              }
            })
          }
        </Box>
      </Box>

    </Box>
  );
}
