import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import EditIcon from '@site/static/img/edit-icon.svg';

const EditPageLink = ({filePath, linkText = 'Редактировать страницу', deadlinesEdit = false}) => {
    const {siteConfig} = useDocusaurusContext();
    const organizationName = siteConfig.organizationName;
    const repoName = siteConfig.projectName;

    const editUrl = `https://github.com/${organizationName}/${repoName}/edit/master${filePath}`;

    return (
        <p>
            {!deadlinesEdit && (
                <>
                    <hr/>
                    <h4>Есть что добавить/исправить? Внесите изменения в Markdown по ссылке ниже!</h4>
                </>
            )}

            <a
                href={editUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{display: 'inline-flex', alignItems: 'center', fontWeight: "bold"}}
            >
                <EditIcon style={{
                    verticalAlign: 'middle',
                    width: '16px',
                    height: '16px',
                    marginRight: '4px',
                    fill: 'var(--ifm-font-color-base)'
                }}/>
                {linkText}
            </a>
        </p>
    );
};

export default EditPageLink;