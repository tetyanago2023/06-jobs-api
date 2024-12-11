// controller/jobs.js

const Job = require('../models/Job');
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const getAllJobs = async (req, res) => {
    res.send('get all jobs');
}

const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId
    const job = await Job.create({...req.body})
    res.status(StatusCodes.CREATED).json({ job })
}

const getSingleJob = async (req, res) => {
    res.send('get single job');
}

const updateJob = async (req, res) => {
    res.send('update job');
}

const deleteJob = async (req, res) => {
    res.send('delete job');
}

module.exports = {
    getAllJobs,
    createJob,
    getSingleJob,
    updateJob,
    deleteJob
}
