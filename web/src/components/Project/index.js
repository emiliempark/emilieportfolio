import { format, distanceInWords, differenceInDays } from 'date-fns';
import React from 'react';
import { Link } from 'gatsby';
import { buildImageObj } from '../../lib/helpers';
import { imageUrlFor } from '../../lib/image-url';
import BlockContent from '../block-content';
import Container from '../Container';
import RoleList from '../../components/RoleList';

// import * as styles from './project.module.css';
import ProjectStyles from './styles';

function Project(props) {
  const {
    _rawBody,
    title,
    categories,
    articleHeadImage,
    members,
    publishedAt,
    relatedProjects
  } = props;
  return (
    <ProjectStyles className="root">
      {props.title && (
        <div className="articleHead">
          <div
            className="articleHeadImage"
            style={{
              backgroundImage: `url(${props.articleHeadImage &&
                props.articleHeadImage.asset &&
                imageUrlFor(buildImageObj(articleHeadImage))
                  .width(1240)
                  .height(250)
                  .fit('crop')
                  .url()})`
            }}
          >
            <h1 className="title">{title}</h1>
          </div>
        </div>
      )}
      <Container>
        <div className="grid">
          <div className="mainContent">
            {publishedAt && (
              <div className="publishedAt">
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do YYYY')}
              </div>
            )}
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
          <aside className="metaContent">
            {/*members && members.length > 0 && <RoleList items={members} title="Project members" /> */}
            {/*categories && categories.length > 0 && (
              <div className="categories">
                <h3 className="categoriesHeadline">Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
                  ) */}
            {relatedProjects && relatedProjects.length > 0 && (
              <div className="relatedProjects">
                <h3 className="relatedProjectsHeadline">Related projects</h3>
                <ul>
                  {relatedProjects.map(project => (
                    <li key={`related_${project._id}`}>
                      {project.slug ? (
                        <Link to={`/project/${project.slug.current}`}>
                          <div className="imageWrapper">
                            {project.mainImage && project.mainImage.asset && (
                              <img
                                src={imageUrlFor(buildImageObj(project.mainImage))
                                  .width(600)
                                  .height(Math.floor((16 / 16) * 600))
                                  .url()}
                                alt={project.mainImage.alt}
                              />
                            )}
                          </div>
                          <div className="textBoxCurtain">{project.title}</div>
                        </Link>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </ProjectStyles>
  );
}

export default Project;
