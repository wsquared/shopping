import React, { useRef, useState, MutableRefObject } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { Product } from './product.d';

type ShoppingCartProps = {
  cartItems: Product[];
  onRemoveFromCart: (product: Product) => void;
  isMenu?: boolean;
};

const ShoppingCart = ({
  cartItems,
  onRemoveFromCart,
  isMenu = false,
}: ShoppingCartProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (buttonElement: MutableRefObject<null>) => {
    if (cartItems.length < 1) {
      return;
    }
    setAnchorEl(buttonElement.current);
  };

  const buttonRef = useRef(null);

  if (isMenu) {
    return (
      <>
        <Badge badgeContent={cartItems.length} color="secondary">
          <Button
            ref={buttonRef}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={() => handleClick(buttonRef)}
          >
            <ShoppingCartOutlinedIcon />
          </Button>
        </Badge>
        <Menu
          id="simple-menu"
          keepMounted
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {cartItems.map((item) => (
            <MenuItem key={item.productId}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Typography variant="body1">{item.name}</Typography>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    onRemoveFromCart(item);
                    handleClose();
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </MenuItem>
          ))}
        </Menu>
      </>
    );
  }

  return (
    <>
      <Grid item md={1} lg={1} />
      <Grid item md={11} lg={11}>
        <Card>
          <CardHeader subheader="Shopping cart" />
          <List dense>
            {cartItems.map((item) => (
              <ListItem button key={item.productId}>
                <ListItemText primary={item.name} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => {
                      onRemoveFromCart(item);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Card>
      </Grid>
    </>
  );
};

export default ShoppingCart;
