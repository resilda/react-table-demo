import React from 'react';

//The structure of Pagination, but it will work if we have data from an API
const Pagination = (props) => {
	return (
		<div style={{ border: '4px solid blue', width: '250px', padding: '5px' }}>
			<div>
				<h4 style={{ color: 'blue' }}>Pagination</h4>
				{props.pageIndex + 1} out of {props.pageOptions.length}
			</div>
			<div>
				<button onClick={props.previousPage} disabled={!props.canPreviousPage}>
					Prev
				</button>
				<ul style={{ display: 'flex', justifyContent: 'space-between' }}>
					{props.pageOptions.map((index, page) => {
						let totalPages = props.pageOptions.length;
						if (page + 1 > 5 && page + 1 < 10 && totalPages >= 10) {
							return '';
						}
						if (page + 1 === 10) {
							return <li key={index}>....{10}</li>;
						}
						if (page + 1 > 10 && totalPages > 10) {
							const numbersOFpagesAfter_Page_10 = props.pageOptions.slice(10);
							if (numbersOFpagesAfter_Page_10.length > 3 && page + 1 === totalPages) {
								return <li key={index}>....{totalPages}</li>;
							}
							if (numbersOFpagesAfter_Page_10.length > 3 && page + 1 <= 12) {
								return <li key={index}>{page + 1}</li>;
							}
							if (numbersOFpagesAfter_Page_10.length > 3) {
								return '';
							}
							return <li key={index}>{page + 1}</li>;
						}
						return <li key={index}>{page + 1}</li>;
					})}
				</ul>
				<button onClick={props.nextPage} disabled={!props.canNextPage}>
					Next
				</button>
			</div>
		</div>
	);
};

export default Pagination;
