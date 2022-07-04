import { LikeButton } from '@lyket/react';

export Faq = () => {
  return (
    <>
      <h4 id="Do you like this page">喜欢这篇帖子吗？</h4>
      <LikeButton
        id="do-you-like-this-page"
        namespace="faq"
        hideCounterIfLessThan={1}
      >
        {({
          handlePress,
          totalLikes,
          userLiked,
          isLoading,
          isCounterVisible
        }) => (
          <>
            <button onClick={handlePress} disabled={isLoading}>
              🍕
            </button>
            {isCounterVisible && <div>Total: {totalLikes}</div>}
            {userLiked && <div>好棒! 谢谢你的点赞!</div>}
          </>
        )}
      </LikeButton>
    </>
  )
};
