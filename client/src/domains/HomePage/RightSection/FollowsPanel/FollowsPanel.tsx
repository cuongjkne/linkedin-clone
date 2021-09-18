//components
import RecommendedUserItem from './RecommendedUserItem/RecommendedUserItem';
import RightSidePanelModel from '../common/RightSidePanelModel/RightSidePanelModel';
import InfoPanel from '../common/InfoPanel/InfoPanel';

function FollowsPanel() {
  const data = [
    { id: '1', name: 'Husky King', bio: 'President', linkUrl: '/', imgSrc: '/images/husky.png' },
    {
      id: '2',
      name: 'Cat Yellow',
      bio: 'Fish is my favorite.Co-chair of the Bill & Melinda Gates Foundation. Founder of Pivotal Ventures. Author of The Moment of Lift.',
      linkUrl: '/',
      imgSrc: '/images/cat.jpg'
    },
    { id: '3', name: 'Banh Mi Viet Nam', bio: 'I love bread', linkUrl: '/', imgSrc: '/images/bread.jpg' }
  ];
  //render list
  const Items = data.map(({ id, name, bio, linkUrl, imgSrc }) => (
    <RecommendedUserItem key={id} name={name} bio={bio} linkUrl={linkUrl} imgSrc={imgSrc} />
  ));
  return (
    <RightSidePanelModel
      linkUrl="/myNetwork"
      title="Add to your feed"
      linkText="View all recommendations"
      items={Items}
    >
      <InfoPanel text="Follow things that interest you to personalize your feed." linkUrl="/" />
    </RightSidePanelModel>
  );
}

export default FollowsPanel;
