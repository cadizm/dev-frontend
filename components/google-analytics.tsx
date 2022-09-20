const trackingId: string = 'G-50M0FLW8G3';

const GoogleAnalytics = () => {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}></script>
      <script dangerouslySetInnerHTML={{
        __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${trackingId}', {page_path: window.location.pathname,});
    `,
      }}
      />
    </>
  );
};

export default GoogleAnalytics;
