import { Fragment, useEffect } from "react";
import styled from "styled-components";
import { useFetchUsers } from "../hooks/useFetchUsers";
import { API_STATUS } from "../constants";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 2xl;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const ContentContainer = styled.div`
  width: 50%;
`;

const UserName = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const UserEmail = styled.h3`
  font-size: 1rem;
  color: #555555;
`;

const FetchButton = styled.button`
  margin-top: 1rem;
  background-color: #0053b3;
  color: #ffffff;
  padding: 1rem;
`;

export function Users() {
  const { users, initFetchUsers, fetchStatus, error } =
    useFetchUsers();

  useEffect(() => {
    initFetchUsers();
  }, []);

  return (
    <Container>
      <FetchButton onClick={initFetchUsers}>
        {fetchStatus === API_STATUS.PENDING ? "Loading..." : "Fetch Users"}
      </FetchButton>

      {users?.length > 0 ? (
        <FlexContainer>
          <ContentContainer >
            {users.map((user) => (
              <Fragment key={user.id}>
                <UserName>{user.name}</UserName>
                <UserEmail>{user.email}</UserEmail>
              </Fragment>
            ))}
          </ContentContainer>
        </FlexContainer>
      ) : null}
      {error && (
        <div>
          <p>Error fetching users:</p>
          <p>{error.message}</p>
        </div>
      )}
    </Container>
  );
}
