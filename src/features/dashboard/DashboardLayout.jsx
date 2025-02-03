import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: isBookingsLoading } = useRecentBookings();
  const { stays, confirmedStays, isLoading: isStaysLoading } = useRecentStays();
  if (isBookingsLoading || isStaysLoading) {
    return <Spinner />;
  }
  console.log(bookings);
  console.log(confirmedStays);
  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>Todays Activity</div>
      <div>Chart Stay Duration</div>
      <div>Chart Sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
