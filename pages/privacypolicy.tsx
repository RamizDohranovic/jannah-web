import React from 'react';

const PrivacyPolicy = () => {
  const emailFeedback = () => {
    window.location.href = 'mailto:jannahadhaninfo@gmail.com';
  };

  return (
    <div>
      <h2 style={{ fontWeight: 'bold' }}>Privacy Policy for Jannah App</h2>
      <p style={{ fontStyle: 'italic' }}>Last updated: 05.28.2024</p>
      <p>
        Welcome to Jannah ("us", "we", or "our") mobile application. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our App.
      </p>
      <p>
        By using the Jannah App, you agree to the practices described in this Privacy Policy.
      </p>
      <h3 style={{ fontWeight: 'bold' }}>1. Information We Collect</h3>
      <p>When you register and use the Jannah App, we may collect the following types of personal information from you:</p>
      <p>
        <strong>Email Address:</strong> We may collect your email address when you register or subscribe to our services.
      </p>
      <p>
        <strong>Name:</strong> We may collect your name to personalize your experience with the App.
      </p>
      <p>
        <strong>Location:</strong> We collect your location data to calculate the exact prayer times for your specific location. This data is solely used for prayer time calculations and is not used for any other purposes.
      </p>
      <h3 style={{ fontWeight: 'bold' }}>2. Use of Collected Information</h3>
      <p>We use the data we collect from you for the following purposes:</p>
      <ul>
        <li>To provide and improve our services: We use your data to offer and enhance the features and functionalities of the Jannah App, providing you with a better user experience.</li>
        <li>Prayer Time Calculations: We use your location data to calculate the exact namaz time for your convenience.</li>
      </ul>
      <h3 style={{ fontWeight: 'bold' }}>3. Data Storage</h3>
      <p>Your personal information, including email, name, and location, is stored securely on Firebase servers. We take appropriate measures to protect your data from unauthorized access, disclosure, or loss.</p>
      <h3 style={{ fontWeight: 'bold' }}>4. Third-Party Integrations</h3>
      <p>Jannah App offers user registration through third-party services like Google and Facebook. Please note that these services have their privacy policies, and we recommend reviewing their terms before using them to register for our App.</p>
      <h3 style={{ fontWeight: 'bold' }}>5. User's Option to Delete Information</h3>
      <p>
        You have the right to delete your account and any personal information associated with it at any time. To do so, please contact us at{' '}
        <span
          onClick={emailFeedback}
          style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }}
        >
          jannahadhaninfo@gmail.com
        </span>
        , and we will promptly assist you.
      </p>
      <h3 style={{ fontWeight: 'bold' }}>6. Firebase Analytics</h3>
      <p>
        We use Firebase Analytics to gain insights into how users interact with the App. This helps us analyze user behavior and make improvements to enhance your experience. Firebase Analytics collects data such as app usage, navigation paths, and device information, but it does not collect personally identifiable information.
      </p>
      <h3 style={{ fontWeight: 'bold' }}>7. Children's Privacy</h3>
      <p>
        Jannah App is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately at{' '}
        <span
          onClick={emailFeedback}
          style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }}
        >
          jannahadhaninfo@gmail.com
        </span>
        . We will remove such information from our records.
      </p>
      <h3 style={{ fontWeight: 'bold' }}>8. Changes to this Privacy Policy</h3>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the "Last updated" date will be revised accordingly. By continuing to use the App after any modifications, you accept the updated Privacy Policy.
      </p>
      <h3 style={{ fontWeight: 'bold' }}>9. AdMob</h3>
      <p>Collection and Use of Data</p>
      <p>
        Our application uses advertisements as one of the sources of revenue. Advertisements are displayed through partnerships with third parties such as Google AdMob.
      </p>
      <p>
        Third parties serving ads may collect and use data about users to provide personalized advertisements. This data may include device identifiers, IP addresses, browsing data, and application usage data.
      </p>
      <p>Links to Privacy Policies of Advertising Partners</p>
      <p>
        For more information on the collection and use of data by Google AdMob, please visit their privacy policy:{' '}
        <a href="https://policies.google.com/technologies/ads" target="_blank" style={{ color: 'blue' }}>
          Google AdMob Privacy Policy
        </a>
      </p>
      <p>User Options</p>
      <p>
        Users can manage their privacy settings regarding advertisements directly from their device settings. For more information on opting out of personalized ads, please visit:{' '}
        <a href="https://adssettings.google.com" target="_blank" style={{ color: 'blue' }}>
          Google Ad Settings
        </a>
      </p>
      <h3 style={{ fontWeight: 'bold' }}>10. Contact Us</h3>
      <p>
        If you have any questions, concerns, or requests related to this Privacy Policy or the use of your personal information, please contact us at{' '}
        <span
          onClick={emailFeedback}
          style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }}
        >
          jannahadhaninfo@gmail.com
        </span>
        .
      </p>
      <p>
        Thank you for using Jannah App and trusting us with your spiritual journey. We are dedicated to maintaining the utmost privacy and ensuring your peace of mind while using our App.
      </p>
      <p style={{ fontStyle: 'italic' }}>Sincerely,</p>
      <p style={{ fontWeight: 'bold' }}>Jannah Team</p>
    </div>
  );
};

export default PrivacyPolicy;
