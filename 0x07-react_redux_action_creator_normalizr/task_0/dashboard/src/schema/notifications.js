import * as Data from '../../notifications.json';


export default function getAllNotificationsByUser(userId) {
  return (
    Data.default
    .filter((item) => item.author.id == userId)
    .map(({ context }) => context)
  );
};
