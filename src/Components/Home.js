import React, { useMemo } from 'react';
import styled from 'styled-components';
import data from '../Data/Data';
import UsersTable from './UsersTable';

const Styles = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	table {
		border-spacing: 0;
		border: 1px solid black;

		tr {
			:last-child {
				td {
					border-bottom: 0;
				}
			}
		}

		th,
		td {
			margin: 0;
			padding: 0.5rem;
			border-bottom: 1px solid black;
			border-right: 1px solid black;

			:last-child {
				border-right: 0;
			}
		}
	}
`;

const Home = () => {
	const columns = useMemo(
		() => [
			{
				Header: 'User',
				columns: [
					{
						Header: 'Name',
						accessor: 'name'
					},
					{
						Header: 'Username',
						accessor: 'username'
					},
					{
						Header: 'Email',
						accessor: 'email'
					}
				]
			},
			{
				Header: 'Address',
				columns: [
					{
						Header: 'Street',
						accessor: 'address.street'
					},
					{
						Header: 'Suite',
						accessor: 'address.suite'
					},
					{
						Header: 'City',
						accessor: 'address.city'
					}
				]
			},
			{
				Header: 'Company',
				columns: [
					{
						Header: 'Company Name',
						accessor: 'company.companyName'
					},
					{
						Header: 'Catch Phrase',
						accessor: 'company.catchPhrase'
					}
				]
			}
		],
		[]
	);

	return (
		<div>
			<h1>Users</h1>
			<Styles>
				<UsersTable columns={columns} data={data} />
			</Styles>
		</div>
	);
};

export default Home;
