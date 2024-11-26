import conf from '../conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {
             // eslint-disable-next-line no-useless-catch
             try {
                return await this.databases.createDocument(conf.apprwriteDatabaseId,
                     conf.appwriteCollectionId, 
                     slug, 
                     {
                        title,
                        content, 
                        featuredImage, 
                        status,
                        userId,
                    }
                )
             } catch (error) {
                throw error;
             }

    }

    async updatePost(slug, {title, content, featuredImage, status}){

        // eslint-disable-next-line no-useless-catch
        try {
            return await this.databases.updateDocument(
                conf.apprwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            throw error;
        }

    }

    async deletePost({slug}) {
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.databases.deleteDocument(
                conf.apprwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            throw error;
            return false;
        }
    }

    async getPost(slug){
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.databases.getDocument(
                conf.apprwriteDatabaseId,
                conf.appwriteCollectionId, 
                slug
            )
        } catch (error) {
            throw error;
        }
    }

    async getPosts(queries=[Query.equal("status","active")]){
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.databases.listDocuments(
                conf.apprwriteDatabaseId,
                conf.appwriteCollectionId,
              queries,
              
            )
        } catch (error) {
            throw error;
            return false;
        }
    }

    // file upload service

    async uploadFile(file){ 
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId, 
                ID.unique(),
                file

            )
        } catch (error) {
            throw error;
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            throw error;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service()

export default service

