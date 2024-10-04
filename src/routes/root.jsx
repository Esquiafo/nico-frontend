import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Input, Layout, Menu } from 'antd';

const { Header, Sider, Content } = Layout;

export default function Root() {
    const { t, i18n } = useTranslation();

    // Function to switch between languages
    const switchLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <Layout style={{ height: '100vh' }}>
            {/* Sidebar */}
            <Sider width={250} theme="dark">
                <div class='font-sans hover:font-serif' style={{ padding: '16px', color: '#fff', textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>
                    {t('title')}
                </div>

                {/* Language Switcher */}
                <div style={{ padding: '16px' }}>
                    <Button block onClick={() => switchLanguage('en')} style={{ marginBottom: '8px' }}>
                        English
                    </Button>
                    <Button block onClick={() => switchLanguage('es')}>
                        Español
                    </Button>
                </div>

                {/* Menu */}
                <Menu theme="dark" mode="inline">
                    <Menu.Item key="1">
                        <a href="/contacts/1">{t('your_name')}</a>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <a href="/contacts/2">{t('your_friend')}</a>
                    </Menu.Item>
                </Menu>
            </Sider>

            {/* Main content */}
            <Layout>
                <Header style={{ backgroundColor: '#fff', padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <Input.Search
                        placeholder={t('search_placeholder')}
                        enterButton
                        style={{ width: '50%' }}
                    />
                    <Button type="primary" style={{ marginLeft: '16px' }}>
                        {t('new_button')}
                    </Button>
                </Header>

                <Content style={{ padding: '24px', backgroundColor: '#f0f2f5' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#555' }}>
                            Detail View
                        </h2>
                        <p style={{ color: '#888', marginTop: '8px' }}>
                            This area will display details when you select a contact.
                        </p>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}
