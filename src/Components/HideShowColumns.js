import React, { forwardRef, useEffect, useRef } from 'react';

//'forwardRef' is a technique for automatically passing a ref through a component to one of its children.

const ColumnCheckbox = forwardRef(({ component, ...rest }, ref) => {
	const defaultRef = useRef();
	const resolvedRef = ref || defaultRef;

	useEffect(
		() => {
			resolvedRef.current.indeterminate = component;
		},
		[ resolvedRef, component ]
	);

	return <input type="checkbox" ref={resolvedRef} {...rest} />;
});
export default ColumnCheckbox;
