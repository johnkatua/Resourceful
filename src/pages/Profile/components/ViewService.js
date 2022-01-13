import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getServicesByAccount } from '../../../redux/action/Services';
import ServiceCard from '../../../components/services/ServiceCard';

const ViewService = () => {
  const dispatch = useDispatch();
  const { servicesByAccount } = useSelector((state) => state.servicesByAccount);
  const { currentUser } = useSelector((state) => state.authentication);
  const userId = currentUser.id;
  console.log(servicesByAccount);
  console.log(userId);

  useEffect(() => {
    dispatch(getServicesByAccount(userId));
  }, [dispatch, userId]);

  return (
    <div className='view--service'>
      {servicesByAccount.map((service) => {
        return (
          <div>
            <ServiceCard service={service} />
          </div>
        );
      })}
    </div>
  )
}

export default ViewService
