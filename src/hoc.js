import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

export const withNavigation = (Component: Component) => {
	return (props) => <Component {...props} navigate={useNavigate()} />;
};
